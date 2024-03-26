"use client";

import { createDomain } from "effector";

const modals = createDomain();

export const openSearchModal = modals.createEvent();
export const closeSearchModal = modals.createEvent();

export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false);
