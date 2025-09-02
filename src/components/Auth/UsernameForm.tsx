'use client'

import { useState } from "react";
import { User } from "lucide-react";
import { updateProfile } from "../../utils/auth";
import { validateUsername, sanitizeInput } from "../../utils/validation";
import { useAuth } from "../../hooks/useAuth";

interface UsernameFormProps {
  onSuccess: () => void;
}

const UsernameForm: React.FC<UsernameFormProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState<{ username?: string; general?: string }>({});
  const [loading, setLoading] = useState(false);
  const { setProfile } = useAuth();

  const validateForm = () => {
    const newErrors: { username?: string } = {};

    if (!validateUsername(username)) {
      newErrors.username =
        "Username 3-20 karakter, hanya huruf, angka, dan underscore";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const sanitizedUsername = sanitizeInput(username);
    const { data, error } = await updateProfile({
      username: sanitizedUsername,
    });

    if (error) {
      if (error.includes("duplicate") || error.includes("unique")) {
        setErrors({
          username: "Username sudah digunakan, silakan pilih yang lain",
        });
      } else {
        setErrors({ general: error });
      }
    } else {
      setProfile(data);
      onSuccess();
    }

    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (errors.username) {
      setErrors((prev) => ({ ...prev, username: "" }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Lengkapi Profil</h2>
        <p className="text-gray-600 mt-2">
          Silakan pilih username untuk melanjutkan
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Pilih username"
              required
            />
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            Username akan digunakan sebagai identitas Anda di platform
          </p>
        </div>

        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-600">{errors.general}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !username.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          {loading ? "Menyimpan..." : "Lanjutkan"}
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
