/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PostsComponent } from './posts.component';

describe('Component: Posts', () => {
  it('should create an instance', () => {
    let component = new PostsComponent();
    expect(component).toBeTruthy();
  });
});
