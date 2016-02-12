package demo_manager;

import tink.core.Future;
import tink.core.Future.FutureTrigger;
import async_tools.Cps.*;


class Main {
  static function main() {

    var states:AStates<Int> = [
      new AState(function(state) state.trigger.trigger(0)),
      new AState(function(state) state.trigger.trigger(1)),
      new AState(function(state) {
        cont_exec({
          @await wait(3000);
          state.trigger.trigger(2);
        });
      }),
      new AState(function(state) state.trigger.trigger(3)),
      new AState(function(state) state.trigger.trigger(4))
    ];


    states.process_states(2,function(state) trace(state));

  }
}
