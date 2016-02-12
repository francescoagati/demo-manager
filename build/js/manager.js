(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
var demo_$manager_Main = function() { };
demo_$manager_Main.main = function() {
	var tmp;
	var this1;
	var trigger = new tink_core_FutureTrigger();
	this1 = { init : function(state) {
		var _this = state.trigger;
		if(_this.list == null) false; else {
			var list = _this.list;
			_this.list = null;
			_this.result = 0;
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list,0);
			tink_core__$Callback_CallbackList_$Impl_$.clear(list);
			true;
		}
	}, trigger : trigger, end_state : trigger.future};
	tmp = this1;
	var tmp1;
	var this2;
	var trigger1 = new tink_core_FutureTrigger();
	this2 = { init : function(state1) {
		var _this1 = state1.trigger;
		if(_this1.list == null) false; else {
			var list1 = _this1.list;
			_this1.list = null;
			_this1.result = 1;
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list1,1);
			tink_core__$Callback_CallbackList_$Impl_$.clear(list1);
			true;
		}
	}, trigger : trigger1, end_state : trigger1.future};
	tmp1 = this2;
	var tmp2;
	var this3;
	var trigger2 = new tink_core_FutureTrigger();
	this3 = { init : function(state2) {
		var tmp5;
		var __fn_tmp_11553620_2963952292_c7587386f7788617da06ab2e90713587 = function(__return) {
			setTimeout(function() {
				var _this2 = state2.trigger;
				if(_this2.list == null) false; else {
					var list2 = _this2.list;
					_this2.list = null;
					_this2.result = 2;
					tink_core__$Callback_CallbackList_$Impl_$.invoke(list2,2);
					tink_core__$Callback_CallbackList_$Impl_$.clear(list2);
					true;
				}
				__return();
			},3000);
		};
		tmp5 = __fn_tmp_11553620_2963952292_c7587386f7788617da06ab2e90713587;
		tmp5(function() {
		});
	}, trigger : trigger2, end_state : trigger2.future};
	tmp2 = this3;
	var tmp3;
	var this4;
	var trigger3 = new tink_core_FutureTrigger();
	this4 = { init : function(state3) {
		var _this3 = state3.trigger;
		if(_this3.list == null) false; else {
			var list3 = _this3.list;
			_this3.list = null;
			_this3.result = 3;
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list3,3);
			tink_core__$Callback_CallbackList_$Impl_$.clear(list3);
			true;
		}
	}, trigger : trigger3, end_state : trigger3.future};
	tmp3 = this4;
	var tmp4;
	var this5;
	var trigger4 = new tink_core_FutureTrigger();
	this5 = { init : function(state4) {
		var _this4 = state4.trigger;
		if(_this4.list == null) false; else {
			var list4 = _this4.list;
			_this4.list = null;
			_this4.result = 4;
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list4,4);
			tink_core__$Callback_CallbackList_$Impl_$.clear(list4);
			true;
		}
	}, trigger : trigger4, end_state : trigger4.future};
	tmp4 = this5;
	var states = [tmp,tmp1,tmp2,tmp3,tmp4];
	var cb = function(state5) {
		console.log(state5);
	};
	var states_from = states.slice(2);
	var tmp6;
	var __fn_tmp_41886592_6050000861_c7587386f7788617da06ab2e90713587 = function(__return1) {
		var __iterator = 0;
		var __doCount = 0;
		var tmp7;
		var __continue_01 = null;
		__continue_01 = function() {
			if(__iterator < states_from.length) {
				if(__doCount++ == 0) while(true) {
					var state6 = states_from[__iterator++];
					state6;
					state6.init(state6);
					var __afterVar_3 = [(function() {
						return function(response) {
							response;
							var __endIf_0 = (function() {
								return function() {
									__continue_01();
									return;
								};
							})();
							if(cb != null) {
								cb(response);
								__endIf_0();
							} else __endIf_0();
						};
					})()];
					state6.end_state((function(__afterVar_3) {
						return function(__parameter_4) {
							__afterVar_3[0](__parameter_4);
						};
					})(__afterVar_3));
					if(!(--__doCount != 0)) break;
				}
			} else __return1();
		};
		tmp7 = __continue_01;
		var __continue_0 = tmp7;
		__continue_0();
	};
	tmp6 = __fn_tmp_41886592_6050000861_c7587386f7788617da06ab2e90713587;
	tmp6(function() {
	});
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var tink_core__$Callback_CallbackList_$Impl_$ = {};
tink_core__$Callback_CallbackList_$Impl_$.add = function(this1,cb) {
	var tmp;
	var tmp1;
	var this2;
	this2 = new Array(1);
	tmp1 = this2;
	var ret = tmp1;
	ret[0] = cb;
	tmp = ret;
	var cell = tmp;
	this1.push(cell);
	return function() {
		if(HxOverrides.remove(this1,cell)) cell[0] = null;
		cell = null;
	};
};
tink_core__$Callback_CallbackList_$Impl_$.invoke = function(this1,data) {
	var _g = 0;
	var _g1 = this1.slice();
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell[0] != null) cell[0](data);
	}
};
tink_core__$Callback_CallbackList_$Impl_$.clear = function(this1) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		cell[0] = null;
	}
};
var tink_core_TypedError = function() { };
tink_core_TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error: " + this.message;
		if(this.pos != null) ret += " " + this.printPos();
		return ret;
	}
	,throwSelf: function() {
		throw new js__$Boot_HaxeError(this);
	}
};
var tink_core__$Future_Future_$Impl_$ = {};
tink_core__$Future_Future_$Impl_$._new = function(f) {
	return f;
};
var tink_core_FutureTrigger = function() {
	var _g = this;
	this.list = [];
	this.future = tink_core__$Future_Future_$Impl_$._new(function(callback) {
		var tmp;
		if(_g.list == null) {
			callback(_g.result);
			tmp = null;
		} else tmp = tink_core__$Callback_CallbackList_$Impl_$.add(_g.list,callback);
		return tmp;
	});
};
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
demo_$manager_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
