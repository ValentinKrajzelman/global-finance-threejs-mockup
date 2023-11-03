import React, {useRef, useState, useCallback, useImperativeHandle} from "react";

import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  timeout,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  DiamondPlugin,
  FrameFadePlugin,
  GLTFAnimationPlugin,
  GroundPlugin,
  BloomPlugin,
  TemporalAAPlugin,
  AnisotropyPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
  addBasePlugins,
  ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  IViewerPlugin,
  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WebgiViewer = () => {
  return <div></div>;
};

export default WebgiViewer;
