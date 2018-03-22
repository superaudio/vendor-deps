"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
const empty_1 = require("rxjs/observable/empty");
const filesystem_1 = require("./filesystem");
class DryRunSink extends filesystem_1.FileSystemSink {
    constructor(root = '', force = false) {
        super(root, force);
        this._subject = new Subject_1.Subject();
        this._fileDoesNotExistExceptionSet = new Set();
        this._fileAlreadyExistExceptionSet = new Set();
        this.reporter = this._subject.asObservable();
    }
    _fileAlreadyExistException(path) {
        this._fileAlreadyExistExceptionSet.add(path);
    }
    _fileDoesNotExistException(path) {
        this._fileDoesNotExistExceptionSet.add(path);
    }
    _done() {
        this._fileAlreadyExistExceptionSet.forEach(path => {
            this._subject.next({
                kind: 'error',
                description: 'alreadyExist',
                path,
            });
        });
        this._fileDoesNotExistExceptionSet.forEach(path => {
            this._subject.next({
                kind: 'error',
                description: 'doesNotExist',
                path,
            });
        });
        this._filesToDelete.forEach(path => {
            // Check if this is a renaming.
            for (const [from, _] of this._filesToRename) {
                if (from == path) {
                    // The event is sent later on.
                    return;
                }
            }
            this._subject.next({ kind: 'delete', path });
        });
        this._filesToCreate.forEach((content, path) => {
            // Check if this is a renaming.
            for (const [_, to] of this._filesToRename) {
                if (to == path) {
                    // The event is sent later on.
                    return;
                }
            }
            if (this._fileAlreadyExistExceptionSet.has(path)
                || this._fileDoesNotExistExceptionSet.has(path)) {
                return;
            }
            this._subject.next({ kind: 'create', path, content: content.generate() });
        });
        this._filesToUpdate.forEach((content, path) => {
            this._subject.next({ kind: 'update', path, content: content.generate() });
        });
        this._filesToRename.forEach(([path, to]) => {
            this._subject.next({ kind: 'rename', path, to });
        });
        this._subject.complete();
        return empty_1.empty();
    }
}
exports.DryRunSink = DryRunSink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJ5cnVuLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy9zaW5rL2RyeXJ1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLDBDQUF1QztBQUN2QyxpREFBOEM7QUFDOUMsNkNBQThDO0FBbUM5QyxnQkFBd0IsU0FBUSwyQkFBYztJQU81QyxZQUFZLElBQUksR0FBRyxFQUFFLEVBQUUsS0FBSyxHQUFHLEtBQUs7UUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTmpELGFBQVEsR0FBRyxJQUFJLGlCQUFPLEVBQWUsQ0FBQztRQUN0QyxrQ0FBNkIsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ2xELGtDQUE2QixHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFFbkQsYUFBUSxHQUE0QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWQsQ0FBQztJQUVuRCwwQkFBMEIsQ0FBQyxJQUFZO1FBQy9DLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNTLDBCQUEwQixDQUFDLElBQVk7UUFDL0MsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxPQUFPO2dCQUNiLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixJQUFJO2FBQ0wsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUUsT0FBTztnQkFDYixXQUFXLEVBQUUsY0FBYztnQkFDM0IsSUFBSTthQUNMLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsK0JBQStCO1lBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQiw4QkFBOEI7b0JBQzlCLE1BQU0sQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDNUMsK0JBQStCO1lBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNmLDhCQUE4QjtvQkFDOUIsTUFBTSxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7bUJBQ3pDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUM7WUFDVCxDQUFDO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QixNQUFNLENBQUMsYUFBSyxFQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBckVELGdDQXFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBlbXB0eSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBGaWxlU3lzdGVtU2luayB9IGZyb20gJy4vZmlsZXN5c3RlbSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBEcnlSdW5FcnJvckV2ZW50IHtcbiAga2luZDogJ2Vycm9yJztcbiAgZGVzY3JpcHRpb246ICdhbHJlYWR5RXhpc3QnIHwgJ2RvZXNOb3RFeGlzdCc7XG4gIHBhdGg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRHJ5UnVuRGVsZXRlRXZlbnQge1xuICBraW5kOiAnZGVsZXRlJztcbiAgcGF0aDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBEcnlSdW5DcmVhdGVFdmVudCB7XG4gIGtpbmQ6ICdjcmVhdGUnO1xuICBwYXRoOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IEJ1ZmZlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRHJ5UnVuVXBkYXRlRXZlbnQge1xuICBraW5kOiAndXBkYXRlJztcbiAgcGF0aDogc3RyaW5nO1xuICBjb250ZW50OiBCdWZmZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIERyeVJ1blJlbmFtZUV2ZW50IHtcbiAga2luZDogJ3JlbmFtZSc7XG4gIHBhdGg6IHN0cmluZztcbiAgdG86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgRHJ5UnVuRXZlbnQgPSBEcnlSdW5FcnJvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB8IERyeVJ1bkRlbGV0ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB8IERyeVJ1bkNyZWF0ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB8IERyeVJ1blVwZGF0ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB8IERyeVJ1blJlbmFtZUV2ZW50O1xuXG5cbmV4cG9ydCBjbGFzcyBEcnlSdW5TaW5rIGV4dGVuZHMgRmlsZVN5c3RlbVNpbmsge1xuICBwcm90ZWN0ZWQgX3N1YmplY3QgPSBuZXcgU3ViamVjdDxEcnlSdW5FdmVudD4oKTtcbiAgcHJvdGVjdGVkIF9maWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByb3RlY3RlZCBfZmlsZUFscmVhZHlFeGlzdEV4Y2VwdGlvblNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIHJlYWRvbmx5IHJlcG9ydGVyOiBPYnNlcnZhYmxlPERyeVJ1bkV2ZW50PiA9IHRoaXMuX3N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3Iocm9vdCA9ICcnLCBmb3JjZSA9IGZhbHNlKSB7IHN1cGVyKHJvb3QsIGZvcmNlKTsgfVxuXG4gIHByb3RlY3RlZCBfZmlsZUFscmVhZHlFeGlzdEV4Y2VwdGlvbihwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9maWxlQWxyZWFkeUV4aXN0RXhjZXB0aW9uU2V0LmFkZChwYXRoKTtcbiAgfVxuICBwcm90ZWN0ZWQgX2ZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb24ocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvblNldC5hZGQocGF0aCk7XG4gIH1cblxuICBfZG9uZSgpIHtcbiAgICB0aGlzLl9maWxlQWxyZWFkeUV4aXN0RXhjZXB0aW9uU2V0LmZvckVhY2gocGF0aCA9PiB7XG4gICAgICB0aGlzLl9zdWJqZWN0Lm5leHQoe1xuICAgICAgICBraW5kOiAnZXJyb3InLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ2FscmVhZHlFeGlzdCcsXG4gICAgICAgIHBhdGgsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uU2V0LmZvckVhY2gocGF0aCA9PiB7XG4gICAgICB0aGlzLl9zdWJqZWN0Lm5leHQoe1xuICAgICAgICBraW5kOiAnZXJyb3InLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ2RvZXNOb3RFeGlzdCcsXG4gICAgICAgIHBhdGgsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbGVzVG9EZWxldGUuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZW5hbWluZy5cbiAgICAgIGZvciAoY29uc3QgW2Zyb20sIF9dIG9mIHRoaXMuX2ZpbGVzVG9SZW5hbWUpIHtcbiAgICAgICAgaWYgKGZyb20gPT0gcGF0aCkge1xuICAgICAgICAgIC8vIFRoZSBldmVudCBpcyBzZW50IGxhdGVyIG9uLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdWJqZWN0Lm5leHQoeyBraW5kOiAnZGVsZXRlJywgcGF0aCB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWxlc1RvQ3JlYXRlLmZvckVhY2goKGNvbnRlbnQsIHBhdGgpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZW5hbWluZy5cbiAgICAgIGZvciAoY29uc3QgW18sIHRvXSBvZiB0aGlzLl9maWxlc1RvUmVuYW1lKSB7XG4gICAgICAgIGlmICh0byA9PSBwYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGV2ZW50IGlzIHNlbnQgbGF0ZXIgb24uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZmlsZUFscmVhZHlFeGlzdEV4Y2VwdGlvblNldC5oYXMocGF0aClcbiAgICAgICAgICB8fCB0aGlzLl9maWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uU2V0LmhhcyhwYXRoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N1YmplY3QubmV4dCh7IGtpbmQ6ICdjcmVhdGUnLCBwYXRoLCBjb250ZW50OiBjb250ZW50LmdlbmVyYXRlKCkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fZmlsZXNUb1VwZGF0ZS5mb3JFYWNoKChjb250ZW50LCBwYXRoKSA9PiB7XG4gICAgICB0aGlzLl9zdWJqZWN0Lm5leHQoeyBraW5kOiAndXBkYXRlJywgcGF0aCwgY29udGVudDogY29udGVudC5nZW5lcmF0ZSgpIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpbGVzVG9SZW5hbWUuZm9yRWFjaCgoW3BhdGgsIHRvXSkgPT4ge1xuICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHsga2luZDogJ3JlbmFtZScsIHBhdGgsIHRvIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3ViamVjdC5jb21wbGV0ZSgpO1xuXG4gICAgcmV0dXJuIGVtcHR5PHZvaWQ+KCk7XG4gIH1cbn1cbiJdfQ==