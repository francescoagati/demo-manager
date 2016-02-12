package demo_manager;
import haxe.macro.Expr;

class MacroTools {

  public macro static function init_state<T>(expr:ExprOf<demo_manager.State<T>>) {
    return macro function(_) {
      $e{expr};
    }
  }

}
