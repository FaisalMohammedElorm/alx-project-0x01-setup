import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
      <div className="text-gray-600 text-sm space-y-1">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Website:</span> {website}</p>
        <p><span className="font-semibold">Company:</span> {company.name}</p>
        <p><span className="font-semibold">Address:</span> {address.city}, {address.street}</p>
      </div>
      <div className="mt-4 text-xs text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
