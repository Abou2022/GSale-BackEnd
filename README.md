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
    - figure out the cascading and updating of models
    - authentication 
    - build routes with current model architecture in place 
    - build seeds for database
    - deploy backend