import {MicroApp} from './model/micro-app';
import {FrontendRouter} from '@frontend/router';
import {AreaConfig} from './model/area-config';

/**
 * This class configure micro apps
 */
export class MicroAppsManager {

    private areaConfigOptions: AreaConfig;

    configuraArea(areaConfig: AreaConfig) {
        this.areaConfigOptions = areaConfig;
    }

    initApps(micorApps: MicroApp[]) {
        const router = new FrontendRouter();
        micorApps.forEach(app => {
            router.add(app.name, () => this.showFrame(app))
            this.createFrame(app);
        })
    }

    showFrame(app: MicroApp) {

    }

    createFrame(app: MicroApp) {
        if (!this.areaConfigOptions) {
            throw({message: 'please set area configuration by using configureArea method' })
        }
        const frameArea = document.querySelector(this.areaConfigOptions.frameAreaSelector);

        if (!frameArea) {
            throw({message: `No element found by the selector "${this.areaConfigOptions.frameAreaSelector}"`});
        }

        const frame = document.createElement('iframe');
        frame.id = `micro-app-frame-${app.name}`;
        frameArea.appendChild(frame);


    }
}