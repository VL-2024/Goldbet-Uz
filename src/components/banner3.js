import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container1 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container2">
          <h2 className="banner3-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner3-text4">GoldBET</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner3-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner3-text3">
                  Новости, анализ, законодательство и больше
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner3-text5">Shop Now</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  content1: undefined,
  rootClassName: '',
  heading1: undefined,
  action1: undefined,
  image1Alt: 'Products and Services',
  image1Src: 'b672d4a0-c928-42e0-8e5f-a7973da23a7c',
}

Banner3.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Banner3
