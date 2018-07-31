import React from 'react'
import WorkItem from './partials/WorkItem'
import dscover from '../../img/covers/ds.jpg'
import famiscover from '../../img/covers/famis.jpg'
import nrdccover from '../../img/covers/nrdc.jpg'
import engagecover from '../../img/covers/engage.jpg'
import agentselectioncover from '../../pages/engage-agent-selection/assets/exploreHeader.jpg'
import customerappcover from '../../pages/engage-customer/assets/header.jpg'

const brands = {
    pivotus: 'pivotus',
    nrdc: 'nrdc',
    famis: 'famis',
}

const WorkList = () => (
  <div>
    <div style={{
      paddingBottom: "2rem",
    }}>
      <WorkItem fullWide title="Engage — Agent Selection" image={agentselectioncover} brand={brands.pivotus} link="/engage-agent-selection" type="Product Design" />
    </div>
    <div style={{
      paddingBottom: "4rem",
    }}>
      <WorkItem fullWide title="Engage — Customer app" image={customerappcover} brand={brands.pivotus} link="/engage-customer" type="Product Design" />
    </div>
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
  <p style={{ fontSize: '16px', fontFamily: 'europa' }}>Coming soon</p>
  </div>


    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>

      <WorkItem title="Engage Dashboard" image={engagecover} brand={brands.pivotus} type="Product Design, Research, Front-end" />
      <WorkItem title="Pivotus Design System" image={dscover} brand="pivotus" type="Product Design, Front-end" />
      <WorkItem title="NRDC Campaigns" brand={brands.nrdc} image={nrdccover} type="Visual, Motion, Front-end" />
      <WorkItem title="LOYNO: FAMIS" brand={brands.famis} image={famiscover} type="Design, Development"/>

    </div>

  </div>
)

export default WorkList
