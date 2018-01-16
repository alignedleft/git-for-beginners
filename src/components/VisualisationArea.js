import React, { PureComponent } from 'react';
import { withTheme } from 'styled-components';

import VisualisationObject3D from './VisualisationObject3D';
import { CELL_HEIGHT, CELL_WIDTH } from '../theme';

export const AREA_VERTICAL_PADDING = CELL_WIDTH * 0.1;
export const AREA_HORIZONTAL_PADDING = CELL_HEIGHT * 0.1;

@withTheme
class VisualisationArea extends PureComponent {
  constructor(props) {
    super();

    const { theme } = props;

    this.areaObject = new THREE.Group();

    this.planeMesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: theme.color.highlight, opacity: 0.1, transparent: true, depthWrite: false }),
    );

    this.planeMesh.rotation.x = Math.PI / -2;

    this.areaObject.add(this.planeMesh);
  }

  render() {
    const { children, area } = this.props;

    this.planeMesh.scale.set(
      CELL_HEIGHT * area.height - AREA_HORIZONTAL_PADDING,
      CELL_WIDTH * area.width - AREA_VERTICAL_PADDING,
      1
    );

    this.planeMesh.position.z = CELL_WIDTH * ((area.width / 2) - 0.5);
    this.planeMesh.position.x = CELL_HEIGHT * ((area.height / 2) - 0.5);

    this.areaObject.position.set(
      CELL_HEIGHT * area.row,
      0,
      CELL_WIDTH * area.column,
    );

    return (
      <VisualisationObject3D object3D={this.areaObject}>
        {children}
      </VisualisationObject3D>
    );
  }
}

export default VisualisationArea;