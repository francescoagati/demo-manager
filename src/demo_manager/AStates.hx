package demo_manager;

import tink.core.Future;
import tink.core.Future.FutureTrigger;
import async_tools.Cps.*;
import thx.Nulls;



abstract AStates<T>(States<T>) from States<T> to States<T> {
  public inline function new(states:States<T>) this = states;
  public inline function process_states(from:Int = 0,?cb:T->Void) {

    var states_from = this.slice(from);

    cont_exec({

      for (state in states_from) {
        state.init(state);
        var response = @await state.end_state.handle();
        if (cb != null) cb(response);
      }

    });
  }
}
