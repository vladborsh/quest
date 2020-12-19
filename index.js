function checkSelectedZone(selectedZone, region) {
    return selectedZone.start.x < region.start.x && 
        selectedZone.start.y < region.start.y &&
        selectedZone.end.x > region.end.x && 
        selectedZone.end.y > region.end.y
}

class Stage1Controller {
    constructor(stage11Controller) {
        this.nextBtn = document.getElementById('stage-1-next');
        this.bindOnNextClick = this.onNextClick.bind(this);
        this.stage11Controller = stage11Controller;
    }

    init() {
        this.nextBtn.addEventListener('click', this.bindOnNextClick)
    }

    terminate() {
        this.nextBtn.removeEventListener('click', this.bindOnNextClick)
    }

    onNextClick() {
        const stage1El = document.getElementById('stage-1');
        const stage2El = document.getElementById('stage-1-1');
        
        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage11Controller.init();
    }
}

class Stage11Controller {
    constructor(stage12Controller) {
        this.nextBtn = document.getElementById('stage-1-1-next');
        this.bindOnNextClick = this.onNextClick.bind(this);
        this.stage12Controller = stage12Controller;
    }

    init() {
        this.nextBtn.addEventListener('click', this.bindOnNextClick)
    }

    terminate() {
        this.nextBtn.removeEventListener('click', this.bindOnNextClick)
    }

    onNextClick() {
        const stage1El = document.getElementById('stage-1-1');
        const stage2El = document.getElementById('stage-1-2');

        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage12Controller.init();
    }
}

class Stage12Controller {
    constructor(stage2Controller) {
        this.nextBtn = document.getElementById('stage-1-2-next');
        this.bindOnNextClick = this.onNextClick.bind(this);
        this.stage2Controller = stage2Controller;
    }

    init() {
        this.nextBtn.addEventListener('click', this.bindOnNextClick)
    }

    terminate() {
        this.nextBtn.removeEventListener('click', this.bindOnNextClick)
    }

    onNextClick() {
        const stage1El = document.getElementById('stage-1-2');
        const stage2El = document.getElementById('stage-2');

        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage2Controller.init();
    }
}

class Stage2Controller {
    constructor(stage3Controller, mouseZoneSelection) {
        this.stage3Controller = stage3Controller;
        this.mouseZoneSelection = mouseZoneSelection;
    }

    init() {
        this.mouseZoneSelection.init(zone => {
            const croissant = { end: {x: 449, y: 394}, start: {x: 344, y: 292} };
            const cakeRegion = { end: {x: 699, y: 401}, start: {x: 596, y: 285} }
            const cat = { end: {x: 941, y: 388}, start: {x: 816, y: 262} };

            if (checkSelectedZone(zone, cakeRegion)) {
                new Modal('нит! это не торт :c ');
                return;
            }

            if (checkSelectedZone(zone, croissant)) {
                new Modal('нит! это не круассан :c пробуй ищо');
                return;
            }

            if (checkSelectedZone(zone, cat)) {
                new Modal('дя :3 эта я');
                this.onNext();
                return;
            }

        });
    }

    terminate() {
        this.mouseZoneSelection.terminate();
    }

    onNext() {
        const stage1El = document.getElementById('stage-2');
        const stage2El = document.getElementById('stage-3');

        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage3Controller.init();
    }
}

class Stage3Controller {
    constructor(stage4Controller, mouseZoneSelection) {
        this.stage4Controller = stage4Controller;
        this.mouseZoneSelection = mouseZoneSelection;
    }

    init() {
        this.mouseZoneSelection.init(zone => {
            const cat = { end: {x: 966, y: 176}, start: {x: 917, y: 135} };

            if (checkSelectedZone(zone, cat)) {
                new Modal('да я сидел тама :3');
                this.onNext();
                return;
            }
        });
    }

    terminate() {
        this.mouseZoneSelection.terminate();
    }

    onNext() {
        const stage1El = document.getElementById('stage-3');
        const stage2El = document.getElementById('stage-4');

        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage4Controller.init();
    }
}

class Stage4Controller {
    constructor(stage5Controller, mouseZoneSelection) {
        this.stage5Controller = stage5Controller;
        this.mouseZoneSelection = mouseZoneSelection;
    }

    init() {
        this.mouseZoneSelection.init(zone => {
            const coffee = { end: {x: 599, y: 168}, start: {x: 526, y: 109} };
            const sausage = { end: {x: 808, y: 193}, start: {x: 727, y: 140} };
            const hotdog = { end: {x: 943, y: 254}, start: {x: 880, y: 185} };
            const avocado = { end: {x: 928, y: 419}, start: {x: 854, y: 369} };
            const mouse = { end: {x: 794, y: 511}, start: {x: 729, y: 468} };

            if (checkSelectedZone(zone, coffee)) {
                new Modal('нихатю кофий');
                return;
            }

            if (checkSelectedZone(zone, sausage)) {
                new Modal('и калбаску не буду');
                return;
            }

            if (checkSelectedZone(zone, hotdog)) {
                new Modal('ну хатю не буду сасису');
                return;
            }

            if (checkSelectedZone(zone, avocado)) {
                new Modal('авакааада ♥️');
                this.onNext();
                return;
            }

            if (checkSelectedZone(zone, mouse)) {
                new Modal('не настоящая мыша :с');
                return;
            }
        });
    }

    terminate() {
        this.mouseZoneSelection.terminate();
    }

    onNext() {
        const stage1El = document.getElementById('stage-4');
        const stage2El = document.getElementById('stage-5');

        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage5Controller.init();
    }
}

class Stage5Controller {
    constructor(stage6Controller) {
        this.stage6Controller = stage6Controller;
        this.pinCode = document.getElementById('pin-code');
        this.bindOnInput = this.onInput.bind(this);
    }
    
    init() {
        this.pinCode.addEventListener('input', this.bindOnInput)
    }

    terminate() {
        this.pinCode.removeEventListener('input', this.bindOnInput)
    }

    onInput(event) {
        if (event.target.value === '2125') {
            setTimeout(() => this.onNext(), 500);
        }
    }

    onNext() {
        const stage1El = document.getElementById('stage-5');
        const stage2El = document.getElementById('stage-6');

        stage1El.style.display = 'none';
        stage2El.style.display = 'block';
        this.terminate();
        this.stage6Controller.init();
    }
}

class Stage6Controller {
    constructor() {
    }

    init() {
        fetch(
            `https://api.telegram.org/bot706290530:AAEXq4_Qf5lUBfe9xUlYbjN9uLC-I4TnuAg/sendMessage?chat_id=338953105&text=${encodeURI('Она прошла игру')}`, 
            { method: 'POST' }
        )
    }

    terminate() {
    }
}

class MouseZoneSelection {
    constructor(className) {
        this.className = className;
        this.bindHandleMouseDown = this.handleMouseDown.bind(this);
        this.bindHandleMouseUp = this.handleMouseUp.bind(this);
        this.bindHandleMouseMove = this.handleMouseMove.bind(this);
    }

    init(onReleaseCallback) {
        this.onReleaseCallback = onReleaseCallback;
        document.addEventListener('mousedown', this.bindHandleMouseDown)
        document.addEventListener('mouseup', this.bindHandleMouseUp)
        document.addEventListener('mousemove', this.bindHandleMouseMove)
    }

    terminate() {
        document.removeEventListener('mousedown', this.bindHandleMouseDown)
        document.removeEventListener('mouseup', this.bindHandleMouseUp)
        document.removeEventListener('mousemove', this.bindHandleMouseMove)
    }

    handleMouseDown(event) {
        this.capturing = true;
        this.startPoint = { x: event.clientX, y: event.clientY }
        this.endPoint = { x: event.clientX, y: event.clientY }
        this.drawCapturing();
    }

    handleMouseUp() {
        this.onReleaseCallback({ start: this.startPoint, end: this.endPoint });
        this.capturing = false;
        this.startPoint = null;
        this.endPoint = null;
        this.clearCapturing();
    }

    handleMouseMove(event) {
        if (this.capturing) {
            event.preventDefault()
            this.endPoint = { x: event.clientX, y: event.clientY }
            this.drawCapturing();
        }
    }

    drawCapturing() {
        if (this.capturing && this.startPoint && this.endPoint) {
            if (!this.element) {
                this.element = document.createElement('div');
                document.body.append(this.element)
                this.element.classList = this.className;
            }
            this.element.style.display = 'block';
            this.element.style.left = `${this.startPoint.x}px`;
            this.element.style.top = `${this.startPoint.y}px`;
            this.element.style.width = `${this.endPoint.x - this.startPoint.x}px`;
            this.element.style.height = `${this.endPoint.y - this.startPoint.y}px`;
        }
    }

    clearCapturing() {
        if (this.element) {
            this.element.style.display = 'none';
        }
    }
}

class Modal {
    constructor(text) {
        const modalContainer = document.getElementById("modal-container");
        const modalText = document.getElementById("modal-text");

        modalContainer.style.display = "block";
        modalText.innerText = text
        
        window.onclick = (event) => {
            if (event.target === modalContainer) {
                modalContainer.style.display = "none";
            }
        }

        if (window.getSelection) {
            if (window.getSelection().empty) {  // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {  // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {  // IE?
            document.selection.empty();
        }

    }
}


const mouseZoneSelection = new MouseZoneSelection('capturing');

const stage6Ctrl = new Stage6Controller();
const stage5Ctrl = new Stage5Controller(stage6Ctrl);
const stage4Ctrl = new Stage4Controller(stage5Ctrl, mouseZoneSelection);
const stage3Ctrl = new Stage3Controller(stage4Ctrl, mouseZoneSelection);
const stage2Ctrl = new Stage2Controller(stage3Ctrl, mouseZoneSelection);
const stage12Ctrl = new Stage12Controller(stage2Ctrl);
const stage11Ctrl = new Stage11Controller(stage12Ctrl);
const stage1Ctrl = new Stage1Controller(stage11Ctrl);
stage1Ctrl.init();