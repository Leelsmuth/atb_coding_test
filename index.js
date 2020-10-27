const semverObj = require('./semver');

function determinePrecedence(semver1, semver2) {

  const s1 = semverObj(semver1);
  const s2 = semverObj(semver2);


  let versionCheck = false;

  if (s1.major > s2.major) {

    versionCheck = true;

  } else if (s1.major === s2.major) {

    if (s1.minor > s2.minor) {

      versionCheck = true;

    } else if (s1.minor === s2.minor) {

      if (s1.patch > s2.patch) {

        versionCheck = true;

      } else {

        versionCheck = false;

      }

    } else {

      versionCheck = false;

    }

  } else {

    versionCheck = false;

  }

  return versionCheck;
}


module.exports = determinePrecedence;