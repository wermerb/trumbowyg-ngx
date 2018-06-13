import { TrumbowygOptions } from '../models/trumbowyg-options';
import { InjectionToken } from '@angular/core';

export const TRUMBOWYG_OPTIONS = new InjectionToken<TrumbowygOptions>(
    'Trumbowyg options'
);
