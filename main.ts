/**
 * Blocks for driving Opinsys:Nalle Board
 */
//% weight=100 color=#00000 icon="f004" block="Opinsys:Nalle"
namespace opinsys_nalle {

	/************************************************************************************************************************************************
	* micro:bit Opinsys:Nalle
	************************************************************************************************************************************************/

    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    const microSecInASecond = 1000000
    let distancePerSec = 100
    let numberOfDegreesPerSec = 200

    /**
     * Drives forwards. Call stop to stop
     */
    //% blockId=opinsys_nalle_tassut_ylos
    //% block="tassut ylös"
    export function tassutAlas(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
    }

    /**
     * Drives backwards. Call stop to stop
     */
    //% blockId=opinsys_nalle_tassut_alas
    //% block="tassut alas"
    export function tassuYlos(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

	/**
	 * Sends servos to 'neutral' position.
	 * On a well trimmed 360 this is stationary, on a normal servo this is 90 degrees.
     */
    //% blockId=kitronik_servolite_servos_neutral
    //% block="goto neutral position"
    export function tassutEteen(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }
}
