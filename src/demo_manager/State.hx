package demo_manager;

import tink.core.Future;
import tink.core.Future.FutureTrigger;
import async_tools.Cps.*;



typedef State<T> = {
  init:State<T>->Void,
  trigger:FutureTrigger<T>,
  end_state:Future<T>
}
