package demo_manager;

import tink.core.Future;
import tink.core.Future.FutureTrigger;
import async_tools.Cps.*;



@:forward
abstract AState<T>(State<T>) from State<T> to State<T> {
  public inline function new(fn):AState<T> {

    var trigger = Future.trigger();

    this = {
      init:fn,
      trigger:trigger,
      end_state:trigger.asFuture()
    };
  }
}
