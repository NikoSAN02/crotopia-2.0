import React from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button, User} from "@nextui-org/react";
import {UserTwitterCard} from "./UserTwitterCard";


function Team() {
  return (
    <Popover showArrow placement="bottom">
    <PopoverTrigger>
      <User   
        as="button"
        name="Niko SAN"
        description="Web Designer"
        className="transition-transform"
        avatarProps={{
          src: "https://i.pravatar.cc/"
        }}
      />
    </PopoverTrigger>
    <PopoverContent className="p-1">
      <UserTwitterCard />
    </PopoverContent>
  </Popover>
  )
}

export default Team