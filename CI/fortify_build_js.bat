
set PROJECT_ROOT=D:\jenkins\workspace\SCCM_CodedeX_js\SCCM_Plugin

call D:\plugins\CodeDEX\tool\fortify\bin\sourceanalyzer -b Huawei-SCCMPlugin_Js %PROJECT_ROOT%/**/*.js %PROJECT_ROOT%/**/*.html -exclude %PROJECT_ROOT%/**/*.min.js