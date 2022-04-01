import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './style/popup.css';
import './index.css';
import PostControl from './PostControl';
import Toggle from './Toggle';



/**
 * Toggle class for post option toggle
 */
new Toggle(document.querySelectorAll('.post-control-button')).start();
/**
 * This Class For post control menu
 */
new PostControl().open();

//====================//