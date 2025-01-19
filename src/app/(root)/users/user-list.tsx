import { TrimmedTextWithTooltip } from "@/utils/text-trimmer";
import React from "react";

interface User {
  id: string;
  nickname: string;
  email: string;
  dob: string;
  sex: string;
  residence: string;
  registrationDate: string;
}

interface UserListProps {
  userData: User[];
}

export const UserList: React.FC<UserListProps> = ({ userData }) => {
  return (
    <tbody className="bg-white">
      {userData?.map((user) => (
        <tr
          key={`user-data-email-${user?.email}-${user?.id}-id`}
          className="border-t hover:bg-gray-50 h-[52px]"
        >
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.id?.toString().padStart(2, "0")}.
          </td>
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.nickname}
          </td>
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.email.length > 30 ? (
              <TrimmedTextWithTooltip text={user?.email} />
            ) : (
              user?.email
            )}
          </td>
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.dob}
          </td>
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.sex}
          </td>
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.residence}
          </td>
          <td className="px-4 h-[52px] text-[15px] text-primary-black">
            {user?.registrationDate}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
