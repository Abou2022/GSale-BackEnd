# GSale-BackEnd

attendee
  profile has many attendees and attendee has 1 profile 
  garage sale event has many attendees and attendee has 1 gse 
  TO DO: attendee has many vendors, vendors have 0 attendees

vendor 
  profile has many vendor, vendor has 1 profile 
  gse has many vendor, vendor has 1 gse 

comment 
  comment has 1 profile, profile has manny comments 
  comment has 1 messageBoard, messageboard has many comments 
  
messageboard 
  messageBoard has 1 gse, gse has 1 messageboard 

gse 
  gse has 1 profile, profile has many gse (creator_id)

profile 
  profile has 1 user, user has 1 profile

to do: 
    - build seeds for database
    - deploy backend