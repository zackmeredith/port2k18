import React from 'react'
import WorkItem from './partials/WorkItem'
import dscover from '../../pages/pivotus-design-system/assets/header.jpg'
import famiscover from '../../img/covers/famis.jpg'
import nrdccover from '../../img/covers/nrdc.jpg'
import echocover from '../../img/covers/echo.jpg'
import dashcover from '../../pages/engage-dashboard/assets/header.jpg'
import skubacover from  '../../img/covers/skubacover.jpg'
import agentselectioncover from '../../pages/engage-agent-selection/assets/exploreHeader.jpg'
import customerappcover from '../../pages/engage-customer/assets/header.jpg'

const brands = {
    pivotus: 'pivotus',
    nrdc: 'nrdc',
    echo: 'echo',
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
      paddingBottom: "2rem",
    }}>
      <WorkItem fullWide title="Engage — Customer app" image={customerappcover} brand={brands.pivotus} link="/engage-customer" type="Product Design" />
    </div>
    <div style={{
      paddingBottom: "2rem",
    }}>
      <WorkItem fullWide title="Pivotus Design System" image={dscover} brand={brands.pivotus} link="/pivotus-design-system" type="Product Design, Front-end" />
    </div>
    <div style={{
      paddingBottom: "4rem",
    }}>
      <WorkItem fullWide title="Engage — Dashboard" image={dashcover} brand={brands.pivotus} link="/engage-dashboard" type="Product Design, Research, Front-end" />
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
  <p style={{ fontSize: '16px', fontFamily: '"Europa", sans-serif' }}>Other projects (by request)</p>
  </div>


    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>

      <WorkItem title="Echo & Co" brand={brands.echo} image={echocover} type="Product design, Visual, Research, Front-end, Collected works" />
      <WorkItem title="NRDC Campaigns" brand={brands.nrdc} image={nrdccover} type="Visual, Motion, Front-end" />
      <WorkItem title="LOYNO: FAMIS" brand={brands.famis} image={famiscover} type="Design, Development"/>
      <WorkItem title="Skuba Design Studio" brand={brands.echo} image={skubacover} type="Design, Front-end, Collected works" />

    </div>

  </div>
)

export default WorkList
