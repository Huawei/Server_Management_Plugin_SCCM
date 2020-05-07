
set PATH=C:\Program Files (x86)\MSBuild\14.0\Bin\;%PATH%
set PROJECT_ROOT=D:\jenkins\workspace\SCCM_CodedeX_cs\SCCM_Plugin\

cd ..
call D:\plugins\CodeDEX\tool\fortify\bin\sourceanalyzer -b Huawei-SCCMPlugin msbuild /t:"07 Client\Huawei_SCCMPlugin_PluginUI":Rebuild /property:Configuration=release;Platform=x86;OutputPath="${WORKSPACE}\SCCM_Plugin\build\Output";VisualStudioVersion=15.0 D:\jenkins\workspace\SCCM_CodedeX_cs\SCCM_Plugin\src\Huawei-SCCMPlugin.sln

call D:\plugins\CodeDEX\tool\fortify\bin\sourceanalyzer -b Huawei-SCCMPlugin %PROJECT_ROOT%/**/*.xml %PROJECT_ROOT%/**/*.config %PROJECT_ROOT%/**/*.properties