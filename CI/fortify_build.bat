set SOURCEANALYZER="D:\plugins\CodeDEX\tool\fortify\bin\sourceanalyzer"

%SOURCEANALYZER% -b Huawei-SCCMPlugin-clean

%SOURCEANALYZER% -vsversion 14.0 -b Huawei-SCCMPlugin -libdirs "D:\jenkins\workspace\SCCM_CodedeX\Huawei-SCCMPlugin\Build\101 Lib";"D:\jenkins\workspace\SCCM_CodedeX\Huawei-SCCMPlugin\Build\packages" "D:\jenkins\workspace\SCCM_CodedeX\Huawei-SCCMPlugin\Code"