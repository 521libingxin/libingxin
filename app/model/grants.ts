export let grants = `<?xml version="1.0" encoding="UTF-8"?>
<sm:root xmlns:sm="sm-xml-namespace" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="sm-xml-namespace sm-grants.xsd">
    <sm:namespace name="domino">
        <sm:namespace name="printerui">
            <sm:namespace name="commslib">
                <sm:grantdef enum="grantqs" id="grantqs" translation-offset="32768">
                    <sm:grant id="SHOW_PRINT_OPTIMISATION_BUTTON" service="1" all="1">
                        <sm:description>0</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_PRODUCTION_LINE_SETUP" service="1" all="1">
                        <sm:description>1</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_GLOBAL_PRINT_SETTINGS" service="1" all="1">
                        <sm:description>2</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_EDITOR_DEFAULTS" service="1" all="1">
                        <sm:description>3</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_ADVANCED_SETTINGS" service="1" all="1">
                        <sm:description>4</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_DIAGOSTICS" service="1" all="1">
                        <sm:description>5</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_ADJUSTMENT" service="1" all="1">
                        <sm:description>6</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_ALERT_CONFIGURATION" service="1" all="1">
                        <sm:description>7</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_IOPORT" service="1" all="1">
                        <sm:description>8</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_NETWORK_SETTINGS" service="1" all="1">
                        <sm:description>9</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_SECURITY_SETUP" service="1" all="1">
                        <sm:description>10</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_REGIONAL_SETTINGS" service="1" all="1">
                        <sm:description>11</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_BACKUP_RESTORE" service="1" all="1">
                        <sm:description>12</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_FILE_MANAGER" service="1" all="1">
                        <sm:description>13</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_SYSTEM_INFO" service="1" all="1">
                        <sm:description>14</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_USER_INTERFACE_SETTINGS" service="1" all="1">
                        <sm:description>15</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_TOOLS" service="1" all="1">
                        <sm:description>16</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_PACKS" service="1" all="1">
                        <sm:description>17</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_PRINTER_STATUS" service="1" all="1">
                        <sm:description>18</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_UPGRADE_WIZARD" service="1" all="1">
                        <sm:description>19</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_INK_PRIMING_WIZARD" service="1" all="1">
                        <sm:description>20</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_INK_FLUSHING_WIZARD" service="1" all="1">
                        <sm:description>21</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_NOZZLE_UNBLOCKING_WIZARD" service="1" all="1">
                        <sm:description>22</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_PRINTER_INSTALLATION_WIZARD" service="1" all="1">
                        <sm:description>23</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_PRINT_HEIGHT_CALIBRATION_WIZARD" service="1" all="1">
                        <sm:description>24</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_MESSAGE_SELECT" service="1" all="1">
                        <sm:description>25</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_ACKNOWLEDGE_ALERTS" service="1" all="1">
                        <sm:description>26</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_SAVE_SCREENSHOT" service="1" all="1">
                        <sm:description>27</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_OEE" service="1" all="1">
                        <sm:description>28</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_EDIT_LABELS" service="1" all="1">
                        <sm:description>29</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_ENCODER_SETTINGS" service="1" all="1">
                        <sm:description>30</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_PRINT_TRIGGER_SETTINGS" service="1" all="1">
                        <sm:description>31</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_USE_POWER_BUTTON_ACTION" service="1" all="1">
                        <sm:description>32</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_GLOBAL_PRINT_SETTINGS" service="1" all="1">
                        <sm:description>33</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_BEHAVIOURAL_SCRIPTS" service="1" all="1">
                        <sm:description>34</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_DEFAULT_EDITOR_SETTINGS" service="1" all="1">
                        <sm:description>35</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_CLOCK_SETTINGS" service="1" all="1">
                        <sm:description>36</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_PRINT_HEAD_SETTINGS" service="1" all="1">
                        <sm:description>37</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_MANUAL_MODE_SETTINGS" service="1" all="1">
                        <sm:description>38</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_CONSUMABLES_SETTINGS" service="1" all="1">
                        <sm:description>39</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_HARDWARE_SETTINGS" service="1" all="1">
                        <sm:description>40</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_GUTTER_SETTINGS" service="1" all="1">
                        <sm:description>41</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_LOGS" service="1" all="1">
                        <sm:description>42</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_PROFILE_JET" service="1" all="1">
                        <sm:description>43</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_EXECUTE_TESTS" service="1" all="1">
                        <sm:description>44</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_MODULATION_SETTINGS" service="1" all="1">
                        <sm:description>45</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_PRESSURE_SETTINGS" service="1" all="1">
                        <sm:description>46</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_EXECUTE_TEST_PRINT" service="1" all="1">
                        <sm:description>47</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_INSTALLATION_SETTINGS" service="1" all="1">
                        <sm:description>48</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_INSPECTION_SETTINGS" service="1" all="1">
                        <sm:description>49</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_RANGED_ALERTS" service="1" all="1">
                        <sm:description>50</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_SEND_TEST_EMAIL_ALERT" service="1" all="1">
                        <sm:description>51</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_ENABLE_EMAIL_ALERTS" service="1" all="1">
                        <sm:description>52</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_EMAIL_ALERT_CONFIGURATION" service="1" all="1">
                        <sm:description>53</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_IO_PORT_SETUP" service="1" all="1">
                        <sm:description>54</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_IO_LINE_ASSIGNMENT" service="1" all="1">
                        <sm:description>55</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CLEAR_IO_LINES" service="1" all="1">
                        <sm:description>56</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_TEST_IO_LINES" service="1" all="1">
                        <sm:description>57</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_IO_LABEL_MAPPINGS" service="1" all="1">
                        <sm:description>58</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_ETHERNET_SETTINGS" service="1" all="1">
                        <sm:description>59</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_SERIAL_SETTINGS" service="1" all="1">
                        <sm:description>60</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_ENABLE_WEBSERVER" service="1" all="1">
                        <sm:description>61</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_SEE_MACHINE_TYPES" service="1" all="1">
                        <sm:description>62</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_MACHINE_TYPES" service="1" all="1">
                        <sm:description>63</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_PROTOCOL_SETTINGS" service="1" all="1">
                        <sm:description>64</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_SECURITY_SETTINGS" service="1" all="1">
                        <sm:description>65</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MANAGE_USER_GROUPS" service="1" all="1">
                        <sm:description>66</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CHANGE_ALL_PASSWORDS" service="1" all="1">
                        <sm:description>67</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_ELECTRONIC_SIGNATURE_INFORMATION" service="1" all="1">
                        <sm:description>68</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_USER_INFORMATION" service="1" all="1">
                        <sm:description>69</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_DATE_TIME" service="1" all="1">
                        <sm:description>70</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CREATE_BACKUPS" service="1" all="1">
                        <sm:description>71</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_RESTORE_FROM_BACKUPS" service="1" all="1">
                        <sm:description>72</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MODIFY_DEFAULTS" service="1" all="1">
                        <sm:description>73</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CONFIGURE_UPGRADE_SETTINGS" service="1" all="1">
                        <sm:description>74</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_UPGRADE_PRINTER_SW" service="1" all="1">
                        <sm:description>75</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_SEE_FILE_DETAILS" service="1" all="1">
                        <sm:description>76</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_REMOVE_FILES" service="1" all="1">
                        <sm:description>77</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_MOVE_FILES" service="1" all="1">
                        <sm:description>78</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_COPY_FILES" service="1" all="1">
                        <sm:description>79</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_INSTALL_MIGRATE_PACKS" service="1" all="1">
                        <sm:description>80</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_RESET_STATISTICS" service="1" all="1">
                        <sm:description>81</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_CHANGE_PRINTER_STATE" service="1" all="1">
                        <sm:description>82</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_SEND_LABEL_TO_PRINT" service="1" all="1">
                        <sm:description>83</sm:description>
                    </sm:grant>
                    <sm:grant id="USER_CAN_PREVIEW_LABELS" service="1" all="1">
                        <sm:description>84</sm:description>
                    </sm:grant>
                    <sm:grant id="INITIALISE_PROMPTED_VARIABLES" service="1" all="1">
                        <sm:description>85</sm:description>
                    </sm:grant>
                    <sm:grant id="SERVICE" service="1" all="0">
                        <sm:description>86</sm:description>
                    </sm:grant>
                    <sm:grant id="SHOW_BARCODE_SCANNER_BUTTON" service="1" all="1">
                        <sm:description>87</sm:description>
                    </sm:grant>
                </sm:grantdef>
            </sm:namespace>
        </sm:namespace>
    </sm:namespace>
</sm:root>`;