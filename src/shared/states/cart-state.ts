import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {AddProduct, DeleteProduct} from "../actions/product-action";
import{CartStateModel} from "./cart-state-model";

@State<CartStateModel>({
  name: 'products',
  defaults: {
    Products: []
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getProducts(state: CartStateModel) {
    return state.Products;
  }

  @Action(AddProduct)
  add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddProduct) {
    const state = getState();
    patchState({
      Products: [...state.Products, payload]
    });
  }

  @Action(DeleteProduct)
  delete({ getState, patchState }: StateContext<CartStateModel>, { payload }: DeleteProduct) {
    patchState({
      Products: getState().Products.filter(a => a !== payload)
    });
  }

}
