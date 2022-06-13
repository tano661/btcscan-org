import run from '@cycle/rxjs-run'
import storageDriver from '@cycle/storage'
import { makeHTTPDriver } from '@cycle/http'
import { makeDOMDriver } from '@cycle/dom'
import { makeHistoryDriver, captureClicks } from '@cycle/history'
import makeRouteDriver from './driver/route'
import makeSearchDriver from './driver/search'
import makeScanDriver from './driver/instascan'

import { Observable as O } from './rxjs'

import main from './app'

const apiBase = (process.env.API_URL || '/api').replace(/\/+$/, '')
  , webBase = process.env.BASE_HREF || '/'
  , initTitle = process.browser ? document.title : process.env.SITE_TITLE

const titleDriver = title$ => O.from(title$)
  .subscribe(title => {
    document.title = title ? `${title} | ${initTitle}` : initTitle;
    document.querySelector('meta[property="og:title"]').setAttribute("content", title ? `${title} | ${initTitle}` : initTitle);
  })

const descriptionDriver = description$ => O.from(description$)
  .subscribe(description => {
    if (description) {
      document.querySelector('meta[name="description"]').setAttribute("content", description);
    }
  })

const blindingDriver = process.env.IS_ELEMENTS
  ? require('./driver/blinding')
  : _ => O.empty()

run(main, {
  DOM: makeDOMDriver('#explorer')
  , HTTP: makeHTTPDriver()
  , route: makeRouteDriver(captureClicks(makeHistoryDriver({ basename: webBase })))
  , storage: storageDriver
  , search: makeSearchDriver(apiBase)
  , title: titleDriver
  , description: descriptionDriver
  , scanner: makeScanDriver()
  , blinding: blindingDriver
})
