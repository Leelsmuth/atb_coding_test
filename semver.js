// helper function
function semverObj(semver) {
  const arr = semver.split('.');
  // console.log('arr', arr)
  checkLeadingZero(arr);

  const patchVersion = arr[arr.length - 1];

  const patch = +patchVersion.split('-')[0]; // ignore prerelease version

  return {
    major: +arr[0],
    minor: +arr[1],
    patch,
  };
}

function checkLeadingZero(array) {
  for (let i of array) {
    if (i.length > 1 && i[0] === '0') {
      throw new Error('Invalid semver');
    }
  }
}

module.exports = semverObj;