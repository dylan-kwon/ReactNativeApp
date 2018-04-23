package com.reactnativeapp.module;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class LogModule extends ReactContextBaseJavaModule {

    public static final String TAG = "LogModule";
    public static final boolean IS_LOG_MODE = true;

    public LogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("TAG", TAG);
        constants.put("IS_LOG_MODE", IS_LOG_MODE);
        return constants;
    }

    @Override
    public String getName() {
        return "LogModuleAndroid";
    }

    @ReactMethod
    public void i(@Nullable String message) {
        if (IS_LOG_MODE) {
            Log.i(TAG, message);
        }
    }

    @ReactMethod
    public void d(@Nullable String message) {
        if (IS_LOG_MODE) {
            Log.d(TAG, message);
        }
    }

    @ReactMethod
    public void v(@Nullable String message) {
        if (IS_LOG_MODE) {
            Log.v(TAG, message);
        }
    }

    @ReactMethod
    public void w(@Nullable String message) {
        if (IS_LOG_MODE) {
            Log.w(TAG, message);
        }
    }

    @ReactMethod
    public void e(@Nullable String message) {
        if (IS_LOG_MODE) {
            Log.e(TAG, message);
        }
    }

}
