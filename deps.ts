// import { useObsidian } from 'https://deno.land/x/obsidian@v3.2.0/ObsidianWrapper/ObsidianWrapper.jsx';
import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import ReactDOM from 'https://dev.jspm.io/react-dom';
import {
  ObsidianWrapper,
  useObsidian,
} from './obsidian/ObsidianWrapper/ObsidianWrapper.jsx';
import BrowserCache from './obsidian/src/Browser/CacheClassBrowser.js';
import { Application, Router, Middleware, send } from 'https://deno.land/x/oak@v6.0.1/mod.ts';

import { emit } from "https://deno.land/x/emit/mod.ts";

import { Dero } from "https://deno.land/x/dero@1.2.4/mod.ts";
import ReactRouterDomClient from "https://dev.jspm.io/react-router-dom@5.2.0";
const ReactRouterDom = ReactRouterDomClient as any;

// import { ObsidianWrapper, useObsidian, BrowserCache } from 'https://deno.land/x/obsidian@v.4.0.0/clientMod.ts';

// import {
//   ObsidianWrapper,
//   useObsidian
// } from '../obsidian/ObsidianWrapper/ObsidianWrapper.jsx';

// import BrowserCache from '../obsidian/src/Browser/CacheClassBrowser.js';

export { React, ReactDOMServer, ReactDOM ,ObsidianWrapper, useObsidian, BrowserCache, Application, Router, emit, Dero, ReactRouterDom };
