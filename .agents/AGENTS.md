# Project Behavioral Rules

<RULE[user_commit_recommendation]>
COMMIT RECOMMENDATION RULE:
Whenever requesting authorization from the USER for a commit, ALWAYS include the exact recommended commit message formatted according to Conventional Commits:

`git commit -m "<type>: <short description>"`

Provide this message clearly in the chat response so the user can review and approve it.
</RULE[user_commit_recommendation]>
