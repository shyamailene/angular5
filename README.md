…or create a new repository on the command line

echo "# jbpm" >> README.md
git init

git add README.md

git commit -m "first commit"

git remote add origin https://github.com/shyamailene/angular5 

git push -u origin master

…or push an existing repository from the command line

git remote add origin https://github.com/shyamailene/angular5

git push -u origin master

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.


##use below commands for local build after downloading from git.


npm install -g @angular/cli

ng build

ng serve --open


https://angular.io/guide/quickstart

#Solution for submenu --> https://codepen.io/wanni/pen/zsDJb