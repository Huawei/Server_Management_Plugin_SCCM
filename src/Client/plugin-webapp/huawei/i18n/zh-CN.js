var i18n_zh_CN = {
    common: {
        Close: '关闭',
        confirm: '确定',
        cancel: '取消',
        back: '返回',
        clear: '清空',
        prompt: '提示',
        delete: '删除',
        requiredErrorMsg: '必填项',
        operation: '操作',
        advanced: '高级',
        advancedSet: '高级设置',
        add: '添加',
        reset: '重置',
        search: '查询',
        notify: '提示',
        edit: '编辑',
        status: '状态',
        pleaseEnter: '请输入',
        pleaseSelect: '请选择',
        confirmDelete: '确认删除？',
        confirmDelete1: '您确认要删除所选数据吗？',
        operateSucceeded: '操作成功',
        addSucceeded: '添加成功',
        submit: '提交',
        back: '返回',
        server: '服务器',
        template: '模板',
        beBackTips: '确定返回列表页面？',
        create: '创建',
        operation: '操作',
        name: '名称',
        required: "必选项",
        refresh: '刷新',
        deleteResultTips: '成功#条，失败&条'

    },
    template: {
        templateOptin: {
            value: '',
            label: '全部模板'
        },
        createTemplate: '创建模板',
        getListFailed: '获取数据失败',
        deletingTips: '正在删除中',
        beforeDeleteTips: '此操作将永久删除该模板, 是否继续?',
        addSuccessMsg: '添加成功',
        addFailedMsg: '添加失败',
        delSuccessMsg: '删除成功',
        delFailedMsg: '删除失败',
        editSuccessMsg: '编辑成功',
        templateType: '模板类型',
        templateName: '名称',
        templateDesc: '描述',
        powerControl: '上下电设置',
        powerOn: '上电',
        powerOff: '下电',
        restart: '重启',
        osType: '操作系统类型',
        osSettings: 'OS 设置',
        Software: '软件',
        password: '管理员密码',
        confirmPassword: '确认密码',
        deployDevice: '部署设备',
        cdKey: 'CD Key 只能由大写字母和数字组成的5个字符',
        deployDeviceTips: '使用ServiceCD方式安装，系统会将BIOS启动首选项改为当前部署位置。',
        partitionSettings: '分区设置',
        addHardDisk: '添加硬盘',
        deleteHardDisk: '删除硬盘',
        partition: '分区',
        mountPoint: '挂载点',
        fileSystem: '文件系统',
        capacity: '分区容量',
        operation: '操作',
        useAvailableCapacity: '使用剩余容量',
        templateNameErrorMsg: '名称长度为6-32个字符，只能由中文、字母、数字、“_” 或 “-” 组成。',
        passWordErrorMsg: '管理员密码必须为8~32个字符，且至少包含大写字母、小写字母、数字和特殊字符（`~!@$%^&*()-_=+|[{}];:\'"",<.>/?）中的两种',
        moreHardDiskErrorMsg1: '最多可创建20个分区。',
        moreHardDiskErrorMsg2: '最多可创建14个分区。',
        confirmPasswordErrorMsg: '两次输入密码不相同！',
        confirmPasswordErrorMsg1: '确认密码必须为8~32个字符！',
        beforeColsePageTips: '确认关闭窗口？',
        capacityErrorRangeC: 'C盘容量范围为32000MB~2000000MB或32GB~2000GB。',
        capacityErrorFat32: '文件系统为FAT32时容量范围为100MB~32000MB或1GB~32GB，且不能选择使用剩余容量。',
        capacityErrorOther: 'Windows下文件系统为NTFS或Linux下非根分区容量范围为100MB~999999MB或1GB~1000GB。',
        capacityErrorRoot: '根容量分区范围为10000MB~999999MB或10GB~1000GB。',
        setBootOrder: '设置系统启动顺序。',
        choiceSoftware: '选择软件源',
        choiceSoftware1: '请择软件源',
        softwareName: '软件名称',
        softwareDesc: '描述',
        softwareType: '类型',
        wwpnErrorMsg: '格式必须为 XX:XX:XX:XX:XX:XX:XX:XX, X为16进制整数，例如：1A:2A:3A:4A:5A:6A:7A:8A',
        lunErrorMsg: "必须为0~255之间的整数",
        adapterModel: '型号',
        slot: '槽位号',
        advanced: '高级',
        SANProperties: 'SAN属性',
        enabled: '启用',
        disabled: '禁用',
        priority: '优先级',
        adapterModelErrorMsg: "请选择适配器型号。",
        systemBootOption: "系统启动选项",
        serviceSettings: "服务设置",
        NTPServerSource: "NTP服务器源",
        ntpStatus: "NTP状态",
        primaryNtpServer: "首选NTP服务器",
        secondaryNtpServer: "备用NTP服务器",
        ipErrorMsg: "IP地址首位只能为1到223的整数，其余部分只能为0到255的整数，且首位不能为127末位不能为0。",
        dnsSource: "DNS获取模式",
        AutomaticallyObtain: "自动获取",
        ManuallySet: "手动设置",
        domainName: "域名",
        primaryDnsServer: "首选DNS服务器",
        secondaryDnsServer: "备用DNS服务器",
        ldapStatus: "LDAP状态",
        domainControllerAddress: "域控制器地址",
        userDomain: "用户域",
        roleGroup: "角色组",
        groupName: "组名",
        groupDomain: "组域",
        groupPrivilege: "组特权",
        operation: "操作",
        moreTableErrorMsg: "至多创建五个角色组",
        userDomainErrorMsg: "请输入1~255个格式为\"CN=XXX,DC=XXX,DC=XXX\"的字符,其中XXX不能包含#',\"&和空格,\"DC=XXX\"可以有任意多个。",
        groupDomainErrorMsg: "组域非法。请输入1~255个格式为\"CN=XXX\,OU=XXX\,DC=XXX\,DC=XXX\"的字符，其中XXX不能包含#',\"&和空格，\"DC=XXX\"可以有任意多个",
        roleGroupErrorMsg: "请至少创建一个角色组",
        deleteOriginalRAID: '删除原RAID',
        globalHotSpareDisk: '全局热备盘',
        RAIDAdapterModel: 'RAID适配器型号',
        RAIDGroup: 'RAID组',
        RAIDGroupLevel: 'RAID组级别',
        privateHotSpareDisk: '私有热备盘',
        diskGroupQuantity: '硬盘组数量',
        LUNID: 'LUN ID',
        startLUNID: '启动LUN ID',
        createRAIDGroup: '创建RAID组',
        RAIDlevel: 'RAID级别',
        privateHotSpareDisk: '私有热备盘',
        slotID: '槽位',
        diskgroup: '硬盘组',
        viewRAIDGroup: '查看RAID',
        RAIDDetails: 'RAID详情',
        writePolicy: '写策略',
        readPolicy: '读策略',
        IOPolicy: 'IO策略',
        LUNInformation: 'LUN信息',
        divisionMode: '划分方式',
        raid_capacity: '容量(MB)',
        maximumAvailableCapacity: "最大可用容量",
        RAIDSubmitAlertMsg: "请至少创建一个RAID组。",
        addRAIDGroupErrorMsg: "raid型号为LSI2308(SR120/RU120)和LSI3008(SR130/RU130)时最多允许创建2个Raid组。",
        addLUNErrorMsg: "最多划分64个LUN。",
        addDiskGroupErrorMsg: "最多可选择14个硬盘。",
        createRaidErrorMsg: "请输入正确的槽位号。",
        createRaidErrorMsg2: "请选择RAID级别。",
        editRaidErrorMsg: "请给LUN ID为|的LUN划分有效的容量数值。",
        validateRAIDDiskGorupErrorMsg: "至少选择2个硬盘。",
        validateRAIDDiskGorupErrorMsg2: "RAID0、RAID1、RAID5、RAID6、RAID1E只能创建一个硬盘组。",
        validateRAIDDiskGorupErrorMsg3: "至少选择1个硬盘。",
        validateRAIDDiskGorupErrorMsg4: "RAID1只能支持2块硬盘。",
        validateRAIDDiskGorupErrorMsg5: "至少选择3个硬盘。",
        validateRAIDDiskGorupErrorMsg6: "至少选择4个硬盘。",
        validateRAIDDiskGorupErrorMsg7: "RAID1E需要3块以上硬盘，需要奇数盘数。",
        validateRAIDDiskGorupErrorMsg8: "RAID10硬盘组的数量至少要2组，最多8组，每组的硬盘个数相同且只能为2块盘。",
        validateRAIDDiskGorupErrorMsg9: "RAID50至少要6块盘，硬盘组的数量至少要2组，每组的硬盘个数相同至少3块盘。",
        validateRAIDDiskGorupErrorMsg10: "RAID60至少要8块盘，硬盘组的数量至少要2组，每组的硬盘个数相同至少4块盘。",
        validateRAIDDiskGorupErrorMsg11: "设置全局热备盘后，不能只创建RAID0级别的RAID组，请继续创建其他级别的RAID组。",
        softSourceVersion: '软件源版本类型',
        templateDescErrorMsg: "模板描述的长度必须在0到128个英文字符之间。",
        mountPointErrorMsg: '挂载点不能为空！',
        mountPointErrorMsg1: '挂载点不能重复！',
        mountPointErrorMsg2: '挂载点只能以/开头，由数字、字母和_组成，不能超过255个字符。',
        viewDetail: '查看模板详情'
    },
    eSight: {
        search: '查询',
        addeSight: '添加eSight',
        editSight: '编辑eSight',
        templateNum: '编号',
        templateHost: '主机',
        templateAliasName: '别名',
        templatePort: '端口',
        templateName: '用户名',
        templateDate: '创建日期',
        templateUpdate: '最后更新',
        templateHandle: '操作',
        Edit: '编辑',
        Delete: '删除',
        batchDelete: '批量删除',
        eSightHost: '主机:',
        eSightAliasName: ' 别名:',
        eSightPort: '端口:',
        eSightName: '用户名:',
        eSightPassWord: '密码:',
        linkTest: '测试连接',
        SaveCong: '保存配置',
        getListFailed: '获取数据失败',
        linkTestSucc: '测试连接通过',
        linkTestFalse: '测试连接失败',
        hostNull: '主机不能为空',
        aliasNameNull: '别名不能为空',
        portNull: '端口不能为空',
        nameNull: '用户名不能为空',
        pwdNull: '密码不能为空',
        legthCheck: '长度必须是100个字符以内',
        legthCheckMore: '端口号必须在 0 到 65535 之间',
        deleteTips: '此操作将永久删除该eSight配置, 是否继续?',
        batchDeleteTips: '此操作将永久删除选中的eSight配置, 是否继续?',
        deleteSucc: '删除成功',
        deleteFail: '删除失败',
        addSucc: '添加成功',
        addFail: '添加失败',
        editSucc: '编辑成功',
        hostIpIsRepeat: '主机已经存在，请勿重复添加',
        aliasNameIsRepeat: '别名已经存在，请勿重复添加',
        aliasNameError: '别名长度为1-100个字符，只能由字母、数字、“_”、“-” 或 “.” 组成。',
        hostIPError: '主机IP地址首位只能为1到223的整数，其余部分只能为0到255的整数，且首位不能为127末位不能为0。',
        userNameError: '用户名长度为1-100个字符，只能由字母、数字、“_”、“-” 或 “.” 组成。',
        passWordErrorMsg: '密码长度为1~100个字符，只能由字母、数字和特殊字符组成',
        changeInfo: '修改凭据'
    },
    serverList: {
        serverGetListFailed: '获取数据失败',
        serverIPAddress: 'IP地址',
        serverName: '名称',
        serverStatus: '状态',
        serverType: '型号',
        serverHandle: '操作',
        serverEdit: '编辑',
        serverDelete: '删除',
        serverSearch: '搜索',
        serverDeleteTips: '此操作将永久删除该服务器信息, 是否继续?',
        serverDeleteSucc: '删除成功',
        serverTemplateOptin: {
            value: '',
            label: '全部'
        },
        serverNormal: '正常',
        serverOffline: '离线',
        serverUnknown: '未知',
        serverFault: '故障',
        serverMode: '服务器类型:',
        serverRack: '机架服务器',
        serverBlade: '刀片服务器',
        serverHighdensity: '高密服务器',
        serverStoragenode: '存储型服务器',
        serverThirdpartyserver: '第三方服务器',
        cpuHealthState: 'CPU健康状态',
        memoryHealthState: '内存健康状态',
        serverKunLun:'昆仑服务器'
    },
    firmware: {
        clearFailedTask: '清除失败任务',
        packageName: '升级包名称',
        packageType: '升级包类型',
        esightHost: 'eSight主机',
        progress: '进度',
        status: '状态',
        date: '日期',
        packageDesc: '描述',
        firmwareType: '固件类型',
        firmwareVersion: '版本',
        supportedDeviceModels: '支持设备型号',
        fileListL: '文件列表',
        sftpPort: 'SFTP 端口',
        sftpIp: 'SFTP IP',
        sftpUserName: 'SFTP 用户名',
        sftpPassword: 'SFTP 密码',
        basepackageNameErrorMsg: '名称长度为6-32个字符，只能由字母、数字、“_” 或 “-” 组成。',
        sftpUserNameErrorMsg: 'SFTP用户名必须为0~64个字符',
        passWordErrorMsg: 'SFTP密码必须为0~64个字符', //'SFTP 密码必须为8~32个字符，且至少包含大写字母、小写字母、数字和特殊字符（`~!@$%^&*()-_=+|[{}];:\'"",<.>/?）中的两种',
        basepackageDescriptionErrorMsg: '长度在 0到 128个字符',
        addSuccessMsg: '添加成功',
        deleteTips: '你确定要清除所有的失败任务吗？',
        deleteTips1: '此操作将永久删除该升级包, 是否继续？',
        deleteSucc: '清除成功',
        deleteSucc1: '删除成功',
        deleteFail: '删除失败',
        firmwareDetails_packageName: '包名称',
        firmwareDetails_support: '支持操作系统或设备类型',
        firmwareDetails_releaseDate: '发布日期',
        createTask: '添加任务',
        taskName: '任务标识',
        bujianlist: '部件列表',
        taskProgress: '进度',
        taskResult: '状态',
        createTime: '创建时间',
        taskStatusOptin: {
            value: '',
            label: '全部'
        },
        deleteTaskTips: '此操作将永久删除该任务, 是否继续？',
        basepackageNameTips: '请选择升级包',
        firmwareListTips: '请选择升级固件',
        dntips: '请选择服务器',
        selectPackage: '选择升级固件包',
        selectFirmware: '选择升级固件',
        selectServer: '选择服务器',
        fileListLErrorMsg: '请输入文件列表',
        fileListLErrorMsg1: '文件数已达上限2个。',
        selectupgradePolicy: '选择创建任务方式',
        SelectEffectiveMode: '选择生效方式',
        selectupgradePolicyItem: '不强制匹配固件类型',
        selectupgradePolicyTips: '如果选择不强制匹配设备进行升级，则不去检查设备是否包含此固件类型，直接使用升级包中所选固件类型文件进行升级',
        SelectEffectiveModeItem1: '升级完成后自动重启',
        SelectEffectiveModeItem2: '升级完成后手动重启',
        SelectEffectiveModeTips: '自动重启：可能会造成正常业务中断 手动重启：升级完成后，需要手动重启服务器生效',
        clearFirmTask: '没有可清除的失败任务',
        type_firm: '类型',
        size_firm: '大小',
        liveMode_firm: '激活模式',
        fileName_firm: '文件名称',
        package_firm: '固件以及驱动包:',
        packageList_firm: '固件以及驱动列表:',
        driver_firm: '驱动固件:',
        outBand_firm: '带外固件:',
        inBand_firm: '带内固件:',
        detail_soft: '详情',
        add: '添加',
        dn: "设备DN",
        deviceTaskResult: '结果',
        currentVersion: '当前版本',
        upgradeVersion: '升级版本',
        firmwareProgress: '进度',
        details: '详情',
        getDNInfoErrorTips: '获取设备的升级详情失败',
        getDNInfoTips: '正在获取设备的升级详情',
        serverName: '名称',
        deivceFirmwareTips: '如果设备的固件或驱动没有对应的升级包，那么任务升级列表将不展示固件信息',
        selectFirmwareTips: '请选择相同升级方式的固件进行升级',
        highRisk: '高风险',
        highRiskTips1: '升级过程中设备可能会自动上下电或者重启操作系统，可能导致业务中断，确认要升级吗？',
        agreeTip: '我已仔细阅读了操作提示，并充分了解此操作的风险。'
    },
    task: {
        taskName: "任务名称",
        taskProgress: "进度",
        taskStatus: "状态",
        createTime: "创建时间",
        taskIdenty: '任务标识',
        dn: "设备DN",
        name: '名称',
        servertype: '类型',
        delSuccessMsg: '删除成功',
        detail_soft: '详情',
        dialogTitle: '部署设备详情',
        deviceResult: '结果',
        deviceProgress: '进度',
        errorDetail: '详情',
        confirmDelete: '确认删除该任务吗？',
        getDeviceNameErrorTips: '获取设备名称失败'
    },
    software: {
        name: '名称',
        task: '任务',
        taskState: '状态',
        synchronousState: '进度',
        handle: '操作',
        add: '添加',
        delete: '清除失败任务',
        refresh: '刷新',
        desc: '描述',
        detail: '类型',
        softName: '名称:',
        softDesc: '描述:',
        softType: '类型:',
        softVersion: '版本:',
        softLanguage: '语言:',
        sourceName: '镜像文件名称:',
        sftpPort: 'SFTP 端口:',
        sftipIP: 'SFTP IP:',
        sftipIPName: 'SFTP 用户名:',
        sftipIPpwd: 'SFTP 密码:',
        softwareList: '软件源列表',
        delSuccessMsg: '删除成功',
        clearSuccess: '清除成功',
        beforeDeleteTips: '你确定要删除当前的软件源吗?',
        beforDeleteAlert: '你确定要清除所有的失败任务吗?',
        deletingTips: '正在删除中',
        addSoftware: '添加软件源',
        nameNull: '名称不能为空',
        sourceNameNull: '镜像文件名称不能为空',
        SFTPPortNull: 'SFTP端口不能为空',
        SFTPIPNull: 'SFTP IP 不能为空',
        SFTPNameNull: 'SFTP 用户名不能为空',
        SFTPPwdNull: ' SFTP 密码不能为空',
        templateNameErrorMsg: '名称长度为6-32个字符，只能由字母、数字、“_” 或 “-” 组成。',
        passWordErrorMsg: '密码必须为0~64个字符', //，且至少包含大写字母、小写字母、数字和特殊字符（`~!@$%^&*()-_=+|[{}];:\'"",<.>/?）中的两种
        eSightnull: '必填项',
        addSuccessMsg: '添加成功',
        esightHost: 'eSight主机',
        time: '时间',
        created: '上传中',
        finished: '已完成',
        syncFailed: '同步失败',
        hwFailed: '同步eSight失败',
        inputName: '名称:',
        sftpPortError: 'SFTP端口号只能在0到65535之间的整数',
        sftpIPError: 'IP地址首位只能为1到223的整数，其余部分只能为0到255的整数，且首位不能为127末位不能为0。',
        sftpNameError: '用户名长度为0-64个字符',
        sourceNameError: '镜像文件名称只能由字母、数字、“_”、“-”或“.”组成。',
        clearTask: '没有可清除的失败任务',
        detail_soft: '详情'
    },
    CNA_template: {
        templateType: '模板类型',
        templateName: '名称',
        templateDesc: '描述',
        templateMode: '型号',
        slot: '槽位号',
        mfstatus: 'MF状态',
        sriov: 'SRIOV',
        confirm: '确定',
        cancel: '取消',
        templateNameErrorMsg: '名称长度为6-32个字符，只能由字母、数字、“_” 或 “-” 组成。',
        nameNull: '名称不能为空',
        deleteTips: '确认关闭窗口?',
        eSightnull: '必填项',
        adapterModelNull: '型号不能为空',
        pfType: 'PF类型',
        high: '高级',
        pxeProp: 'PXE属性',
        sanProp: 'SAN属性',
        pfProp: 'PF属性',
        miniBand: '最小带宽比率(1~100%)',
        maxBand: '最大带宽比率(1~100%)',
        pleaseSelect: '请选择...',
        mfTips: 'MF功能支持多通道PF。启用该功能后一个物理端口将被划分为4个逻辑通道。每个逻辑通道可以根据需要设置为网口、FC、或iSCSI口。',
        pfTips: 'PF的工作模式如下:用于传输Ethernet业务数据、FCoE用于访问FC SAN、iSCSI用于访问IP SAN',
        intTips: '请输入2~4094之间的整数',
        bandTips: '请输入1~100之间的整数',
        createSucc: '添加成功',
        priority: '优先级',
        pfVlanID: 'PF vlan ID(2~4094)',
        inputAll: "请输入0～4094之间的整数。",
        inputLittle: "请输入0～7之间的整数。",
        ipCheck: "IP地址首位只能为1到223的整数，其余部分只能为0到255的整数，且首位不能为127末位不能为0。",
        childCode: "您输入的是一个无效的子网掩码。请输入一个有效的掩码。",
        inputIQN: "请输入以iqn.开头的11~223位0-9、a-z、A-Z、. : -字符，遵循格式为iqn.xx:MAC，例如规范格式iqn.1990-08.com.huawei:20-14-03-10-14-30。",
        input31: "请输入0~31位字符。",
        input255: "请输入1~255位字符。",
        input16: "请输入12~16位字符。",
        input65535: "请输入1024～65535之间的整数。",
        input3600: "请输出0~3600之间的整数。",
        input223: "请输入11~223位字符。",
        notSame: '{0}所有PF的最小带宽比率之和必须为100%。',
        error: '提示',
        notEquil: '{0}-{1}与{2}-{3}的PF VLAN ID不能相同。',
        sameStart: "MF状态和SRIOV不可同时启用。",
        pf1TypeSame: 'Port0与Port1的PF1类型必须相同。',
        mz512PF1TypeSame: '{0}与{1}的PF1类型必须相同。',
        highBtnCon: '请完成{0}的PF1高级配置。',
        templateDescTips: '模板描述的长度必须在0到128个字符之间。'
    },
    deviceInfo: {
        name: "名称",
        serverModel: "设备型号",
        servertype: "设备类型",
        lastUpdateTime: "最后更新时间",
        description: "描述",
        onlineDeviceStatus: "在线设备状态",
        cpu: "CPU",
        memory: "内存",
        disk: "硬盘",
        psu: "电源",
        fan: "风扇",
        normal: "正常",
        offline: "离线",
        fault: "故障",
        unknown: "未知",
        motherboard: "主板",
        sn: "序列号",
        manufacture: "厂商",
        healthState: "健康状态",
        manuTime: "单板制造日期",
        frequency: "频率",
        model: "型号",
        capacity: "容量",
        location: "槽位",
        inputPower: "输入功率(W)",
        inputMode: "电流输入模式",
        version: "版本",
        rotate: "转速(RPM)",
        rotatePercent: "转速百分比(%)",
        installationStatus: "在位信息",
        ratedPower: "额定功率(W)",
        protocol: "协议",
        essentialInformation: "基本信息",
        viewDeviceStatus: "查看设备状态",
        partNumber: "单板部件号",
        auto: "自动",
        acInput: "交流电",
        dcInput: "直流电",
        acInputDcInput: "交流电/直流电",
        installed: "在位",
        notInstalled: "不在位",
        assetTag: "资产标签",
        raid: "RAID",
        raidType: "RAID 类型",
        interfaceType: "接口类型",
        bbuType: "BBU 类型",
        PCIE: 'PCIE',
        pcieSsdCardLifeLeft: '设备寿命(%)',
        NetworkCard: '网卡',
        macAdress: 'Mac 地址',
        netWorkCardName: '网卡名称',
        controlModel: "控制模式",
        manual: "手动",
        prompt: '提示',
        critical: '紧急',
        Mezz: 'Mezz',
        locationInfo: '位置信息',
        productSn: '产品序列号',
        status: '状态',
        mode: '型号',
        uuid: 'UUID',
        installedComponentHealthState: '在位组件健康状态',
        blade: '刀片',
        NoRecord: '没有记录',
        mac: 'MAC地址',
        ethMac: "ETH网口MAC地址",
        ibMac: "IB网口MAC地址",
        fcWWPN: "FC网口WWPN",
        cpuHealthState: "CPU健康状态",
        memoryHealthState: "内存健康状态",
        highdensityServer: "高密度服务器",
        bladeServer: "刀片服务器",
        deviceModel: "设备型号",
        switchBoard: "交换板",
        rackServer: '机架服务器',
        kunlunServer:'昆仑服务器'

    }
}