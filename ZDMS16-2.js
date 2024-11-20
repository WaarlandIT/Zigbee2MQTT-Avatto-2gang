const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const modernExtend = require('zigbee-herdsman-converters/lib/modernExtend');
const e = exposes.presets;
const ea = exposes.access;
const tuya = require('zigbee-herdsman-converters/lib/tuya');

const definition = {
    fingerprint: [
        {
            modelID: 'TS0601',
            manufacturerName: '_TZE204_jtbgusdc',
        },
    ],

    model: 'ZDMS16-2',
    vendor: 'Avatto',
    description: 'Zigbee 2 channels Dimmer',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    configure: tuya.configureMagicPacket,
    exposes: [
            tuya.exposes.lightBrightnessWithMinMax().withEndpoint('l1'),
            tuya.exposes.countdown().withEndpoint('l1'),
            tuya.exposes.switchType().withEndpoint('l1'),
            tuya.exposes.lightBrightnessWithMinMax().withEndpoint('l2'),
            tuya.exposes.countdown().withEndpoint('l2'),
            tuya.exposes.switchType().withEndpoint('l2'),
            e.power_on_behavior().withAccess(ea.STATE_SET),
    ],
    meta: {
                multiEndpoint: true,
        tuyaDatapoints: [
            [1, 'state_l1', tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
            [2, 'brightness_l1', tuya.valueConverter.scale0_254to0_1000],
            [3, 'min_brightness_l1', tuya.valueConverter.scale0_254to0_1000],
            [4, 'switch_type_l1', tuya.valueConverterBasic.lookup({'toggle': tuya.enum(0), 'state': tuya.enum(1), 'momentary': tuya.enum(2)})],
            [5, 'max_brightness_l1', tuya.valueConverter.scale0_254to0_1000],
            [6, 'countdown_l1', tuya.valueConverter.countdown],
            [7, 'state_l2', tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
            [8, 'brightness_l2', tuya.valueConverter.scale0_254to0_1000],
            [9, 'min_brightness_l2', tuya.valueConverter.scale0_254to0_1000],
            [10, 'switch_type_l2', tuya.valueConverterBasic.lookup({'toggle': tuya.enum(0), 'state': tuya.enum(1), 'momentary': tuya.enum(2)})],
            [11, 'max_brightness_l2', tuya.valueConverter.scale0_254to0_1000],
            [12, 'countdown_l2', tuya.valueConverter.countdown],
            [14, 'power_on_behavior', tuya.valueConverter.powerOnBehaviorEnum],
        ],
    },
    endpoint: (device) => {
        return {'l1': 1, 'l2': 1};
    },
};

module.exports = definition;
