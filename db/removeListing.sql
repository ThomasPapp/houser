delete from house where id = $1
returning *;