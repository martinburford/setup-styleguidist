import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Markdown from 'rsg-components/Markdown';

import { formatBrandName } from './scripts/utilities';

// Logo images
import BOS from './images/bos.png';
import Halifax from './images/halifax.png';
import Lloyds from './images/lloyds.png';
import MBNA from './images/mbna.png';

class StyleGuideRenderer extends Component {
  constructor(props){
    super(props);

    this.state = {
      brand: 'bos'
    };
  }

  switchBrand(e, brand){
    e.preventDefault();

    this.setState({
      brand
    });
  }

  render(){
    const {brand} = this.state;

    return (
      <div className={classnames('brand-switcher',brand)}>
        <div className="sg-root">
          <main className="wrapper">
            <ul className="brand-logos">
              <li className="brand-logos__brand brand-logos__brand--bos"><img className="brand-logos__image" src={BOS} onClick={e => this.switchBrand(e, 'bos')} /></li>
              <li className="brand-logos__brand brand-logos__brand--halifax"><img className="brand-logos__image" src={Halifax} onClick={e => this.switchBrand(e, 'halifax')} /></li>
              <li className="brand-logos__brand brand-logos__brand--lloyds"><img className="brand-logos__image" src={Lloyds} onClick={e => this.switchBrand(e, 'lloyds')} /></li>
              <li className="brand-logos__brand brand-logos__brand--mbna"><img className="brand-logos__image" src={MBNA} onClick={e => this.switchBrand(e, 'mbna')} /></li>
            </ul>
            <div className="content">
              {this.props.children}
              <footer className="footer">
                <Markdown text="##Footer" />
              </footer>
            </div>
            {this.props.hasSidebar && (
              <div className="sidebar">
                <div className="sidebar__intro">
                  {formatBrandName(brand)}
                </div>
                {this.props.toc}
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }
};

StyleGuideRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toc: PropTypes.object.isRequired,
};

export default StyleGuideRenderer;
