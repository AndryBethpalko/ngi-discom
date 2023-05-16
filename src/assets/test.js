const bg = {
  values: ['bg1', 'bg2', 'bg3'],
  defaultValue: 'someDefaultBg'
};
const rgb = {
  values: ['rgb1', 'rgb2', 'rgb3'],
  defaultValue: 'someDefaultRgb'
};
const rot = {
  values: ['rot1', 'rot2', 'rot3'],
  defaultValue: 'someDefaultRot'
};

function yourFunction(data) {
  console.log(data.join(' '));
}

function print(inputData, props = []) {
  const topArray = inputData.pop();
  const values = topArray.values.length ? topArray.values : [topArray.defaultValue];

  values.forEach(
    item => inputData.length ?
      print([...inputData], [...props, item]) : yourFunction([...props, item])
  )
}

print([bg, rgb, rot]);