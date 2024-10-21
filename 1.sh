git filter-branch --env-filter '
OLD_EMAIL="krishdepani@gmail.com"
NEW_EMAIL="mykhailokoroldev@outlook.com"
NEW_NAME="M-Killer-dev"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
    export GIT_COMMITTER_NAME="$NEW_NAME"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
    export GIT_AUTHOR_NAME="$NEW_NAME"
fi
' --tag-name-filter cat -- --branches --tags