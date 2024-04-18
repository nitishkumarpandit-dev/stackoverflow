import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RenderTag from "../shared/RenderTag";

interface tag {
  _id: string;
  name: string;
}

interface Props {
  _id: string;
  clerkId: string;
  name: string;
  username: string;
  picture: string;
  tags: tag[];
}

const UserCard = ({ _id, clerkId, name, username, picture, tags }: Props) => {
  return (
    <Link
      href={`/profile/${clerkId}`}
      className="background-light900_dark200 light-border flex min-h-[200px] w-full flex-col items-center gap-2 rounded-2xl border p-8 shadow-light-300 dark:shadow-none"
    >
      <Avatar className="size-[100px]">
        <AvatarImage src={picture} />
        <AvatarFallback className="text-dark300_light900 text-2xl">
          {name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <h2 className="h3-bold text-dark200_light900 line-clamp-1">{name}</h2>
      <p className="body-regular text-dark500_light500">@{username}</p>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} tag={tag.name} />
        ))}
      </div>
    </Link>
  );
};

export default UserCard;
