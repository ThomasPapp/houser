insert into house (name, address, city, state, zip, mortgage, rent, img) 
values ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;