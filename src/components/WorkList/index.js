import React from 'react'
import WorkItem from './partials/WorkItem'

import dscover from '../../img/covers/ds.jpg'
import famiscover from '../../img/covers/famis.jpg'
import nrdccover from '../../img/covers/nrdc.jpg'
import engagecover from '../../img/covers/engage.jpg'

const brands = {
    pivotus: 'pivotus',
    nrdc: 'nrdc',
    famis: 'famis',
}

const WorkList = () => (
  <div style={{
    width: '100%',
    padding: "3.5rem 4rem",
  }}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
  }}>
  <hr style={{
    border: 0,
    height: 1,
    width: 48,
    background: "rgb(255, 71, 77)",
    marginRight: '16px',
  }} />
  <p style={{ fontSize: '16px', fontFamily: 'europa' }}>Selected projects</p>
  </div>


    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>

      <WorkItem title="Engage Dashboard" image={engagecover} brand={brands.pivotus} link="/projects/engage-dashboard" type="Product, Research, Front-end" />
      <WorkItem title="Pivotus Design System" image={dscover} brand="pivotus" type="Design, Front-end" />
      <WorkItem title="NRDC Campaigns" brand={brands.nrdc} image={nrdccover} type="Visual, Motion, Front-end" />
      <WorkItem title="LOYNO: FAMIS" brand={brands.famis} image={famiscover} type="Design, Development"/>

    </div>

  </div>
)

export default WorkList
