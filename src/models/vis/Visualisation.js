import { computed } from 'mobx';

import VisualisationObject from './VisualisationObject';

class Visualisation extends VisualisationObject {
  isVisulisation = true;

  @computed
  get visFiles() {
    return this.filter(object => object.isFile);
  }

  @computed
  get visFileLists() {
    return this.filter(object => object.isFileList);
  }

  @computed
  get visAreas() {
    return this.filter(object => object.isArea);
  }

  @computed
  get visBranches() {
    return this.filter(object => object.isBranch);
  }

  @computed
  get visPointers() {
    return this.filter(object => object.isPointer);
  }
}

export default Visualisation;
