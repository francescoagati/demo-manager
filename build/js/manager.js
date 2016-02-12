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
	var states = [];
	var tmp;
	var tmp2;
	var tmp4;
	var tmp6;
	var tmp8;
	var this5;
	var trigger = new tink_core_FutureTrigger();
	this5 = { init : function(_) {
		_.trigger.trigger(0);
	}, trigger : trigger, end_state : trigger.future};
	tmp8 = this5;
	states.push(tmp8);
	tmp6 = states;
	var this4 = tmp6;
	var tmp7;
	var this6;
	var trigger1 = new tink_core_FutureTrigger();
	this6 = { init : function(_1) {
		_1.trigger.trigger(1);
	}, trigger : trigger1, end_state : trigger1.future};
	tmp7 = this6;
	this4.push(tmp7);
	tmp4 = this4;
	var this3 = tmp4;
	var tmp5;
	var this7;
	var trigger2 = new tink_core_FutureTrigger();
	this7 = { init : function(_2) {
		var tmp9;
		var __fn_tmp_22690826_6566957645_2ee55e7eae7d7ff1d9e905aabdaeb7a7 = function(__return) {
			setTimeout(function() {
				_2.trigger.trigger(2);
				__return();
			},3000);
		};
		tmp9 = __fn_tmp_22690826_6566957645_2ee55e7eae7d7ff1d9e905aabdaeb7a7;
		tmp9(function() {
		});
	}, trigger : trigger2, end_state : trigger2.future};
	tmp5 = this7;
	this3.push(tmp5);
	tmp2 = this3;
	var this2 = tmp2;
	var tmp3;
	var this8;
	var trigger3 = new tink_core_FutureTrigger();
	this8 = { init : function(_3) {
		_3.trigger.trigger(3);
	}, trigger : trigger3, end_state : trigger3.future};
	tmp3 = this8;
	this2.push(tmp3);
	tmp = this2;
	var this1 = tmp;
	var tmp1;
	var this9;
	var trigger4 = new tink_core_FutureTrigger();
	this9 = { init : function(_4) {
		console.log("the end");
		_4.trigger.trigger(4);
	}, trigger : trigger4, end_state : trigger4.future};
	tmp1 = this9;
	this1.push(tmp1);
	this1;
	var cb = function(state) {
		console.log(state);
	};
	var states_from = states.slice(2);
	var tmp10;
	var __fn_tmp_60335276_5289905071_2ee55e7eae7d7ff1d9e905aabdaeb7a7 = function(__return1) {
		var __iterator = 0;
		var __doCount = 0;
		var tmp11;
		var __continue_01 = null;
		__continue_01 = function() {
			if(__iterator < states_from.length) {
				if(__doCount++ == 0) while(true) {
					var state1 = states_from[__iterator++];
					state1;
					state1.init(state1);
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
					state1.end_state((function(__afterVar_3) {
						return function(__parameter_4) {
							__afterVar_3[0](__parameter_4);
						};
					})(__afterVar_3));
					if(!(--__doCount != 0)) break;
				}
			} else __return1();
		};
		tmp11 = __continue_01;
		var __continue_0 = tmp11;
		__continue_0();
	};
	tmp10 = __fn_tmp_60335276_5289905071_2ee55e7eae7d7ff1d9e905aabdaeb7a7;
	tmp10(function() {
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
tink_core_FutureTrigger.prototype = {
	trigger: function(result) {
		var tmp;
		if(this.list == null) tmp = false; else {
			var list = this.list;
			this.list = null;
			this.result = result;
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list,result);
			tink_core__$Callback_CallbackList_$Impl_$.clear(list);
			tmp = true;
		}
		return tmp;
	}
};
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
demo_$manager_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
