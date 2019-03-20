Make a blog type app:
Your AppComponent will contain the array of posts, and it will pass it to a PostListComponent component
your PostListComponent will display a PostListItemComponent for each post in the array it has received
each PostListItemComponent will display the title, content and creation date of the post in the template
PostListItemComponent will have buttons that increase and decrease the number of loveIts - this change will only affect the component, and does not need to be escalated to the parent component
Create a service that will store the array of posts and issue them as Subject - the service will also allow the addition of a new post and the deletion of an existing post
integrate a "Delete post" button on each PostListItemComponent
create a new component, NewPostComponent, that will include a form (template or reactive method of choice) that will allow the user to enter the title and content of a new post - this new post will be created and added to the service, and the user will be redirected to the list of posts
integrate a navigation menu at the top (with the corresponding routing), to navigate to the list of posts (/ posts) and to the form (/ new) (the empty path will be redirected to the path / posts) - the link of the menu corresponding to the active route will include the active class
to have the change in the number of loveIts registered in the service.
In addition, all the datas must be inserted, queried, edited or remove from a Firebase database. To reply, thanks to share with us a repository on our Github account : Moonshuttle.
