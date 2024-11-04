module.exports = (commit) => {
  if (commit.merge) {
    commit.type = "Merged PR";
    commit.subject = commit.header;
  }
  return commit;
};