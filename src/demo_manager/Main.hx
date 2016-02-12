package demo_manager;

import tink.core.Future;
import tink.core.Future.FutureTrigger;
import async_tools.Cps.*;
import demo_manager.MacroTools.init_state;

class Main {
  static function main() {

    var states:AStates<Int> = [];
      states
        << init_state(_.trigger.trigger(0))
        << init_state(_.trigger.trigger(1))
        << init_state({
          cont_exec({
            @await wait(3000);
            _.trigger.trigger(2);
          });
        })
        << init_state(_.trigger.trigger(3))
        << init_state({
          trace('the end');
          _.trigger.trigger(4);
        });


    states.process_states(2,function(state) trace(state));

  }
}
