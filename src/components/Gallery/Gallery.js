import React from "react";
import './Gallery.component.scss';

const Gallery=()=> {

    const fs = require('fs')

const dir = '/Users/flavio/folder'
const files = fs.readdirSync(dir)

for (const file of files) {
  console.log(file)
}
}

export default Gallery;