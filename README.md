# GSale-BackEnd

buyer
  profile has many buyers and buyer has 1 profile 
  garage sale event has many buyers and buyer has 1 gse 
  TO DO: buyer has many sellers, sellers have 0 buyers

seller 
  profile has many seller, seller has 1 profile 
  gse has many seller, seller has 1 gse 

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
    - authentication middleware with JWT for all put,delete, post (except for user profile)
    - build seeds for database
    - deploy backend
    - syntax for array of enumerators (categories)